const name = "viktor";
const height = 35;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};;
/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "viktor"', () => {
      expect(name).toEqual('viktor')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toInclude(name)
      expect(message).toInclude(height)
    })
  })
})
*/
