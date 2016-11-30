require_relative 'spec_helper'

context 'No actions are taken' do
  scenario 'User should see just the columns titles' do
    visit '/'
    expect(page).to have_content('Date')
    expect(page).to have_content('Credit')
    expect(page).to have_content('Debit')
    expect(page).to have_content('Balance')
  end
end

context 'If a User makes a deposit' do
  scenario 'should see an updated bank statement' do
    visit '/'
    fill_in(:deposit, with: "1000")
    click_button("Submit")
    sleep(5)
    p page.body
    fill_in(:deposit, with: "2000")
    click_button("Submit")
    sleep(5)
    expect(page).to have_content('1000.00')
    expect(page).to have_content('3000.00')
    expect(page).to have_content('2000.00')
  end
end

context 'If a User makes a withdrawal' do
  scenario 'should see an updated bank statement' do
    visit '/'
    fill_in(:deposit, with: "1000")
    click_button("Submit")
    fill_in(:deposit, with: "2000")
    click_button("Submit")
    fill_in(:withdrawal, with: "500")
    click_button("Submit")
    expect(page).to have_content('1000.00')
    expect(page).to have_content('500.00')
    expect(page).to have_content('2500.00')
  end
end
