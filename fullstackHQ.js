let place = 'Planet Earth';

function fullstackHQ(){
  let country = 'United States'
  return middleFunction(country);

  function middleFunction() {
    let state = 'New York State'
    return innerFunction(state);

    function innerFunction() {
      let city = 'New York City';
      return innermostFunction(city);

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}


describe('fullstackHQ', () => {

  it('is a function', () => {
    expect(typeof fullstackHQ).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = fullstackHQ();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct string', () => {
    let returnedValue = fullstackHQ();
    expect(returnedValue).toEqual('Fullstack HQ is at Planet Earth, United States, New York State, New York City');
  });

});
