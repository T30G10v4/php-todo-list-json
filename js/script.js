const { createApp } = Vue;

createApp ({

    data(){

        return {
            
            singleTask: {

                name: "",
                isDone: false

            },
            
            tasks: [ 
                // {
                //     name: "Alzarmi dal letto",
                //     isDone: false
                // },

                // {
                //     name: "Fare colazione",
                //     isDone: false
                // },

                // {
                //     name: "Accendere il computer",
                //     isDone: false
                // },

                // {
                //     name: "Collegarmi a Zoom",
                //     isDone: false
                // },

                // {
                //     name: "Ascoltare la lezione",
                //     isDone: false
                // },

                // {
                //     name: "Pranzare",
                //     isDone: false
                // },

                // {
                //     name: "Fare l'esercizio",
                //     isDone: false
                // },

                // {
                //     name: "Pushare la repo",
                //     isDone: false
                // },

                // {
                //     name: "FINITO!!!",
                //     isDone: false
                // },

            ]
            
        }
    },

    created() {

        axios.get("server.php").then((resp) => {

            this.tasks = resp.data;

        });

    },

    methods : {

        removeTaskFromTasks : function(index) {

            this.tasks.splice(index, 1);

        },

        changeDoneStatus : function(index) {

            this.tasks[index].isDone = !this.tasks[index].isDone;

        },

        addNewTask: function() {

            this.tasks.push({...this.singleTask});
            this.singleTask.name = "";

        } 

    }

}).mount("#app")
