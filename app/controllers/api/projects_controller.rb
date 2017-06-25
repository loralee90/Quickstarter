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
    @project = current_user.projects.new(project_params)
    @project.rewards_attributes = JSON.parse(params[:project][:rewards_attributes])

    if @project.save
      render :show
    else
      debugger
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = current_user.projects.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      debugger
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render json: @project
  end

  private

  def project_params
    params
      .require(:project)
      .permit(:title, :url, :description, :end_date, :funding_goal, :details, :category_id)
  end
end
