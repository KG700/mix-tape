# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UserTrack, type: :model do

  subject { described_class.new }

  it 'is definitely a class' do
    subject.user_id = 5
    subject.track_id = 6
    expect(subject).to be_valid
  end

end
