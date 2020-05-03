module ControllerHelpers
  def sign_in(user = double('user'))
    if user.nil?
      allow(request.env['mix_tape_test']).to receive(:authenticate!).and_throw(:mix_tape_test, { :scope => :user })
      allow(controller).to receive(:user).and_return(nil)
    else
      allow(request.env['mix_tape_test']).to receive(:authenticate!).and_return(user)
      allow(controller).to receive(:user).and_return(user)
    end
  end
end
