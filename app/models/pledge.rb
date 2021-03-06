# == Schema Information
#
# Table name: pledges
#
#  id              :integer          not null, primary key
#  amount          :integer          not null
#  pledgeable_type :string           not null
#  pledgeable_id   :integer          not null
#  backer_id       :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Pledge < ApplicationRecord
  validates :amount, :pledgeable_id, :pledgeable_type, :backer_id, presence: true
  validates_numericality_of :amount, greater_than: 0

  belongs_to :pledgeable, polymorphic: true
  belongs_to :backer,
  class_name: :User,
  primary_key: :id,
  foreign_key: :backer_id
end
