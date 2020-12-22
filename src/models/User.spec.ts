import { User } from '@models/User'

test('should be ok', () => {
  const user = new User()

  user.name = 'Pedro'

  expect(user.name).toEqual('Pedro')
})
