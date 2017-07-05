class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def create
    params[:project][:rewards_attributes] = JSON.parse(params[:project][:rewards_attributes])
    @project = current_user.projects.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = current_user.projects.find(params[:id])
    params[:project][:rewards_attributes] = JSON.parse(params[:project][:rewards_attributes])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render json: @project
  end

  def search
    search = params[:search].downcase

    if params[:search].present?
      @projects = Project
        .joins(:creator)
        .where(
          "lower(title) ~ :search OR lower(description) ~ :search OR lower(details) ~ :search OR lower(users.name) ~ :search",
           {search: search})
      render :search
    else
      @projects = Project.none
      render json: ["No results found"]
    end
  end

  private

  def project_params
    params
      .require(:project)
      .permit(:title, :image, :url, :description, :end_date, :funding_goal, :details, :category_id, rewards_attributes: [:title, :description, :cost, :delivery_date])
  end
end
