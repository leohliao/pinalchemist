# == Schema Information
#
# Table name: pinnings
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pinning < ApplicationRecord
end