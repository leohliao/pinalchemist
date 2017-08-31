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
  validates :board_id, :pin_id, presence: true
  validates :board_id, uniqueness: { scope: :pin_id }

  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board,
    dependent: :destroy

  belongs_to :pin,
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :Pin,
    dependent: :destroy

end
