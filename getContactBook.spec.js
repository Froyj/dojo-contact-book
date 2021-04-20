const getContactBook = require('./getContactBook');

test('getContactBook is a function', () => {
  expect(typeof getContactBook).toBe('function');
});

test('getContactBook has exactly one parameter', () => {
  expect(getContactBook.length).toBe(1);
});

test('single person data is correctly formated', () => {
  const singlePersonData = [
    {
      firstName: 'Nora',
      lastName: 'Deschamps',
      info: { phone: '075 129 59 20' },
    },
  ];
  expect(getContactBook(singlePersonData)).toBe({
    N: [{ fullName: 'Nora Deschamps', phone: '075 129 59 20' }],
  });
});

test('differents persons correctly sorted (first letter differs)  ', () => {
  const singlePersonData = [
    {
      firstName: 'Nora',
      lastName: 'Deschamps',
      info: { phone: '075 129 59 20' },
    },
    {
      firstName: 'John',
      lastName: 'Gehrmann',
      info: { phone: '(486)-403-4002' },
    },
  ];
  expect(getContactBook(singlePersonData)).toBe({
    J: [{ fullName: 'John Gehrmann', phone: '(486)-403-4002' }],
    N: [{ fullName: 'Nora Deschamps', phone: '075 129 59 20' }],
  });
});

test('differents persons correctly sorted (some first letter are the same)  ', () => {
  const singlePersonData = [
    {
      firstName: 'Nora',
      lastName: 'Deschamps',
      info: { phone: '075 129 59 20' },
    },
    {
      firstName: 'John',
      lastName: 'Gehrmann',
      info: { phone: '(486)-403-4002' },
    },
    {
      firstName: 'Jack',
      lastName: 'Owens',
      info: { phone: '00-4984-8539' },
    },
  ];
  expect(getContactBook(singlePersonData)).toBe({
    J: [
      { fullName: 'John Gehrmann', phone: '(486)-403-4002' },
      { fullName: 'Jack Owens', phone: '00-4984-8539' },
    ],
    N: [{ fullName: 'Nora Deschamps', phone: '075 129 59 20' }],
  });
});

test('differents persons correctly sorted (some first letter are the same)  ', () => {
  const jsonData = [
    {
      firstName: 'Mary',
      lastName: 'Martinez',
      info: {
        phone: '(259)-458-6652',
      },
    },
    {
      firstName: 'Tristan',
      lastName: 'Adams',
      info: {
        phone: '(287)-238-6394',
      },
    },
    {
      firstName: 'Alfredo',
      lastName: 'Altmann',
      info: {
        phone: '(287)-238-6394',
      },
    },
    {
      firstName: 'Begoña',
      lastName: 'Santero',
      info: {
        phone: '(177)-338-3054',
      },
    },
  ];
  expect(getContactBook(jsonData)).toBe({
    A: [
      {
        fullName: 'Adam Beck',
        phone: '(287)-238-6394',
      },
      {
        fullName: 'Alfredo Altmann',
        phone: '(347)-275-9383',
      },
    ],
    B: [
      {
        fullName: 'Begoña Santero',
        phone: '(177)-338-3054',
      },
    ],
    M: [
      {
        fullName: 'Mary Martinez',
        phone: '(259)-458-6652',
      },
    ],
  });
});


