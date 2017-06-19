## Component Hierarchy

### AuthFormContainer
  - AuthForm

### HomeContainer
  - Navbar
    + CategoriesContainer
    + NewProjectFormContainer
    + SearchContainer
  - Featured projects
    + ProjectIndex

### ProjectContainer
  - Author
  - Description
  - Rewards
  - EditProjectFormContainer

### NewProjectFormContainer
  - NewProjectForm

### EditProjectFormContainer
  - EditProjectForm

### SearchContainer
  - SearchResults

### CategoriesContainer
  - Categories
    + ProjectsInCategoryContainer

### ProjectsInCategoryContainer
  - ProjectsInCategory

## Routes

|Path                      | Component                     |
|--------------------------|-------------------------------|
| "/sign-up"               | "AuthFormContainer"           |
| "/log-in"                | "AuthFormContainer"           |
| "/"                      | "HomeContainer"               |
| "/project/:projectId"    | "ProjectContainer"            |
| "/categories/            | "CategoriesContainer"         |
| "/categories/:categoryId | "ProjectsInCategoryContainer" |
| "/search-results"        | "SearchResultsContainer"      |
| "/search"                | "Search"                      |
| "/project/new"	         | "NewProject"                  |
