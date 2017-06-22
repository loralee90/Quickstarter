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

require 'test_helper'

class PledgeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
