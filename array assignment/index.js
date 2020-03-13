import Senators from './data/senators'

export const republicans = () => {
  let republicans = Senators.filter((senator) => {
    return senator.party === "Republican"
  })
  return republicans
}

export const democrats = () => {
  let democrats = Senators.filter((senator) => {
    return senator.party === "Democrat"
  })
  return democrats
}

export const independents = () => {
  let indepedents = Senators.filter((senator) => {
    return senator.party === "Independent"
  })
  return indepedents
}

export const males = () => {
  let males = Senators.filter((senator) => {
    return senator.person.gender === "male"
  })
  return males
}

export const females = () => {
  let females = Senators.filter((senator) => {
    return senator.person.gender === "female"
  })
  return females
}

export const byState = (state = 'UT') => {
  let states = Senators.filter((senator) => {
    return senator.state === "UT"
  })
  return states
}

export const mapping = () => {
  return Senators.map(senator => {

    let results = {
      firstName: senator.firstName,
      lastName: senator.lastName,
      party: senator.party,
      gender: senator.person.gender
    }
    return results
  })

}


export const reducedCount = () => {
  return Senators.reduce((result, value) => {
    let party = value.party.toLowerCase()
    if (result.hasOwnProperty(party)) {
      result[party]++
    } else {
      result[party] = 1
    }
    return result
  }, {})
}



