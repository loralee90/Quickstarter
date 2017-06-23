# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :string           not null
#  end_date     :date             not null
#  funding_goal :integer          not null
#  details      :text
#  creator_id   :integer          not null
#  category_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord
  validates :title, :description, :end_date, :funding_goal, :creator_id, :category_id, presence: true

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :creator_id

  belongs_to :category

  has_many :rewards
  has_many :pledges, as: :pledgeable
  has_many :reward_pledges, through: :rewards, source: :pledges

  accepts_nested_attributes_for :rewards

  def total_pledge_amount
    pledges.sum(:amount) + reward_pledges.sum(:amount)
  end
end