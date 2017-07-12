# Quickstarter

[Quickstarter live](quickstarter-ll.herokuapp.com)

Inspired by Kickstarter, Quickstarter is a single-page web application where users can start and fund projects. It was built with Ruby on Rails, ES6, React and Redux.

![Quickstarter carousel](https://github.com/loralee90/Quickstarter/blob/master/docs/images/carousel.png)
![Quickstarter project index](https://github.com/loralee90/Quickstarter/blob/master/docs/images/project_index.png)

## Features and Implementation

### Project Creation

Users can create projects and add rewards on the project form page.

![gif](https://media.giphy.com/media/l1K9EdZFjwQtOCvOo/giphy.gif)

The project form consists of two elements - the Basics form which contains all the project information, and the Rewards form which contains reward information. Users are able to navigate between the two forms without losing previously typed information. The rewards form also contains an "Add a new reward" button which allows users to dynamically add as many rewards as desired.

### ProjectForm

The challenge was having two different forms (Basics and Rewards), but needing to access information from both in order to create one project. To tackle this, I created a `ProjectForm` component that houses the `BasicsForm` and `RewardsForm` components. `ProjectForm` then contains a local state that stores information from both forms.

```javascript
this.state = {
  formType: "basics",
  title: "",
  description: "",
  end_date: "",
  funding_goal: 0,
  details: "",
  category_id: 0,
  rewardsNums: [1],
  rewards: {
    1: {title: "", description: "", cost: 0, delivery_date: ""}
  },
  imageFile: null,
  imageUrl: null
};
```

The state also keeps track of the formType which updates when a user clicks on either the Basics or Rewards navigation buttons. This information is then passed down to the child components, which only render when the formType matches their own ("basics" for the `BasicsForm` and "rewards" for the `RewardsForm`).

In the backend, I implemented the `accepts_nested_attributes_for` ActiveRecord method in the `Project` model in order to create projects and rewards simultaneously while nesting rewards with their associated projects. My `ProjectsController` accounts for this as well.

```Ruby
def project_params
  params
    .require(:project)
    .permit(:title, :image, :url, :description, :end_date, :funding_goal, :details, :category_id, rewards_attributes: [:title, :description, :cost, :delivery_date])
end
```

When a user submits a project, the data passed into the `createProject` action also contains the rewards.

```javascript
handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append("project[title]", this.state.title);
  formData.append("project[description]", this.state.description);
  formData.append("project[end_date]", this.state.end_date);
  formData.append("project[funding_goal]", this.state.funding_goal);
  formData.append("project[details]", this.state.details);
  formData.append("project[category_id]", this.state.category_id);
  formData.append("project[rewards_attributes]", JSON.stringify(values(this.state.rewards)));

  if (this.state.imageFile) {
    formData.append("project[image]", this.state.imageFile);
  }

  if (this.props.project) {
    this.props.updateProject(this.props.project.id, formData)
      .then(data => this.props.history.push(`/projects/${data.project.id}`));
  } else {
    this.props.createProject(formData)
    .then(data => this.props.history.push(`/projects/${data.project.id}`));
  }
}
```

In order to keep my code DRY, I use the `ProjectForm` component for my project edit functionality as well, which is why the `handleSubmit` function checks for a project in the props. If there is a project, the `updateProject` action is fired. Otherwise, the `createProject` action is fired.

### RewardsForm

Here, I needed the capability to add rewards but also to access the new rewards in my `ProjectForm`. I achieved this by first keeping track of the `rewardsNums` in my `ProjectForm` state. When a user clicks the "Add a new reward" button in the `RewardsForm`, the `updateReward` function is invoked. `updateReward` is a function passed down to the RewardsForm as a prop, and is actually bound to the `ProjectForm`, setting its state.

"Add a new reward" click handler in `RewardsForm`:

```javascript
handleAdd(e) {
  e.preventDefault();
  let rewardNum = this.props.state.rewardsNums.length + 1;
  this.props.updateReward(rewardNum);
}
```

`updateReward` function in `ProjectForm`:

```javascript
updateReward(rewardNum, field) {
  if (this.state.rewardsNums.includes(rewardNum)) {
    return e => {
      this.setState({rewards: merge({}, this.state.rewards, {[rewardNum]: {[field]: e.currentTarget.value}})});
    };
  } else {
    let rewardsNums = this.state.rewardsNums.slice();
    rewardsNums.push(rewardNum);
    const newRewards = merge({}, this.state.rewards, {[rewardNum]: {title: "", description: "", cost: 0, delivery_date: ""}});
    this.setState({rewardsNums, rewards: newRewards});
  }
}
```

The `ProjectForm` passes the new state to `RewardsForm`, where it renders new `RewardsFormItem`s based on `rewardsNums`.

```javascript
{this.props.state.rewardsNums.map(
  num => <RewardsFormItem key={num} rewardNum={num} updateReward={this.props.updateReward} state={this.props.state} />
)}
```
### Project Search

Users can make a live search for projects whose titles, descriptions, details, or project creators match the search.

![gif](https://media.giphy.com/media/3ohryqkWViD17KgABW/giphy.gif)

In order to implement a live search, I added a listener for changes to the search input. Each change fires an AJAX request to fetch search results. The `SearchForm` component receives the results as props and renders the new results each time.

In the backend I created a search route nested under projects.

```Ruby
resources :projects, except: [:new, :edit] do
  get "search", on: :collection
end
```
The `ProjectsController` has a search method that makes an ActiveRecord query for case-insensitve matches.

```ruby
def search
  search = params[:search].downcase

  if params[:search].present?
    @projects = Project
      .joins(:creator)
      .where(
        "lower(title) ~ :search OR lower(description) ~ :search OR lower(details) ~ :search OR lower(users.name) ~ :search",
         {search: search})
    render :search
  end
end
```

### Pledging

Users can make a pledge to either projects or rewards.

![gif](https://media.giphy.com/media/l4FGz7mtG34OJHGUg/giphy.gif)

This is accomplished with polymorphic associations between the `Pledge`, `Project`, and `Reward` models.

`Pledge` model:

```Ruby
class Pledge < ApplicationRecord
  validates :amount, :pledgeable_id, :pledgeable_type, :backer_id, presence: true
  validates_numericality_of :amount, greater_than: 0

  belongs_to :pledgeable, polymorphic: true
  belongs_to :backer,
  class_name: :User,
  primary_key: :id,
  foreign_key: :backer_id
end
```

Both `Project` and `Reward` models have the following association:

```ruby
has_many :pledges, as: :pledgeable
```

I also wanted to create an interactive experience for users making a pledge. Clicking a reward or project pledge box opens up a form and highlights the border to indicate activity. To achieve this, I nested a `RewardPledgeForm` component inside my `RewardListItem` component. `RewardListItem`'s local state indicates whether or not a form should be rendered.

## Future Directions for the Project

I plan on continuing to improve upon the already implemented features and also adding the features below.

### Likes

Users will be able to "like" projects so they can quickly save and reference the projects they've liked.

### User profile

In order for users to keep track of their activity, I plan on building out the user profile. Users will be able to see the projects they've started as well as funded. They will also be able to upload an avatar photo and change account details.

### Credit card payments

I plan on adding credit card payment and authentication functionality to fully equip the app for consumer use.
