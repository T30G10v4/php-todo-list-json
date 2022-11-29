const { createApp } = Vue;

createApp ({

    data(){

        return {
            
            singleTask: {

                name: "",
                isDone: false

            },
            
            tasks: []            
        }
    },

    created() {

        axios.get("server.php").then((resp) => {

            this.tasks = resp.data;

        });

        console.log(this.tasks);

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
