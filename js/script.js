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

    },

    methods : {

        removeTaskFromTasks : function(index) {

            this.tasks.splice(index, 1);

        },

        changeDoneStatus : function(index) {

            this.tasks[index].isDone = !this.tasks[index].isDone;

        },

        addNewTask: function() {

            

            const data = this.singleTask;
            console.log(data);

            axios
                .post("server.php", data, {
                    headers: { "Content-Type": "multipart/form-data" },
                    })
                .then((resp) => {
                    // this.tasks = resp.data;
                    // this.newTodo = "";
                    this.tasks.push({...this.singleTask});
                    this.singleTask.name = "";
                });

            
        } 

    }

}).mount("#app")
