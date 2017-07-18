# == Schema Information
#
# Table name: boards
#
#  id          :integer          not null, primary key
#  board_name  :string           not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord
end
