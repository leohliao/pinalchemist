# == Schema Information
#
# Table name: pins
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  image_url   :string           not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ApplicationRecord
end