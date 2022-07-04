let profile = {

    fname: 'Code',


    lname: 'Gym',


    bday: new Date('1979-01-02')


}

let {bday,...rest}=profile;
console.log(rest)