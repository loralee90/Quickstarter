class Api::PledgesController < ApplicationController
  def create
    @pledge = current_user.pledges.new(pledge_params)

    if @pledge.save
      @project = @pledge.pledgeable_type == "Project" ? @pledge.pledgeable : @pledge.pledgeable.project
      render 'api/projects/show'
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  private

  def pledge_params
    params
      .require(:pledge)
      .permit(:amount, :pledgeable_type, :pledgeable_id, :backer_id)
  end
end
