
const vm = Vue.createApp({
    data() {
        return{
            first_name: 'Ahmed',
            last_name: 'Almashani',
            email: 'aaaa@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
            
        }
    },
    methods: {
        // you should simply declare the function name directly and use async if there is a need to wait for a response.
        async randomUsers (){
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json()
            this.first_name = results[0].name.first;
            this.last_name = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;

        }
    }

}).mount('#VueApp')