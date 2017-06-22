# == Schema Information
#
# Table name: rewards
#
#  id            :integer          not null, primary key
#  project_id    :integer          not null
#  title         :string           not null
#  description   :string           not null
#  cost          :integer          not null
#  delivery_date :date
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
