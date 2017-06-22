class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render :index
  end

  def create
    @project = current_user.projects.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = current_user.projects.find(params[:id])

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

  private

  def project_params
    params
      .require(:project)
      .permit(:title, :url, :description, :end_date, :funding_goal, :details, :category_id, rewards_attributes: [])
  end
end
