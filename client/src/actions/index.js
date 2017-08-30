let students =  [
  {
    name: 'Olga',
    grades: {
      Maths: 10,
      Spanish: 7,
      Latin: 7,
      German: 10
    }
  },
  {
    name: 'Miruna',
    grades: {
      Maths: 9,
      Spanish: 7,
      Latin: 7,
      German: 10
    }
  },
  {
    name: 'Andrei',
    grades: {
      Maths: 5,
      Spanish: 7,
      Latin: 7,
      German: 10
    }
  }
]

export default function(){
  return {
    type: "FETCH_STUDENTS",
    payload: students
  }
}
