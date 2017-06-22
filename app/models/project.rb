# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  url          :string           not null
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
  validates :title, :url, :description, :end_date, :funding_goal, :creator_id, :category_id, presence: true

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :creator_id

  has_many :rewards

  accepts_nested_attributes_for :rewards
end
