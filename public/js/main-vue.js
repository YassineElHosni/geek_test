window.onload = init;

function init() {
    Vue.use(VueMaterial.default);
    new Vue({
        el: "#main",
        data: {
            message: "empty",
            email: "",
            password: "",
            new_email: "",
            new_password: "",
            signup_url: "/signup",
            signin_url: "/signin",
            signout_url: "/signout",
            sections_url: "/sections",
            sections: [{
                "id": 0,
                "title": "private1",
                "short_description": "fdsfsfsfdfd fsdfdfsfsff dsfsfsfdfdfs dfdfsfsffd sfsfsfdfd fsdfdfsfsffdsfs fsfdfdfsdfdfsfsf",
                "long_description": "fds fsfsfdfdfsdfdfsfsffd sfsfsfdfdfsdfdfsfsf fdsfsfsfdfdfsdf dfsfsffdsfsfsfdfdfsdfd.\nfsfsffdsfsfsfdfdfsdfdfsfs ffdsfsfsfdfdfsdfdfsfsffdsf sfsfdfdfsdf dfsfsffdsfsfsfdfdfsdfdfsfsffdsfsfsfdfdfsdfdfsfsffdsfsfsfdfdfsdfdfsfsffdsfsfsfdfdfsdfdfsfsf",
            }, {
                "id": 1,
                "title": "private2",
                "short_description": "fdsfsfsfdfd fsdfdfsfsff dsfsfsfdfdfs dfdfsfsffd sfsfsfdfd fsdfdfsfsffdsfs fsfdfdfsdfdfsfsf",
                "long_description": "fds fsfsfdfdfsdfdfsfsffd sfsfsfdfdfsdfdfsfsf fdsfsfsfdfdfsdf dfsfsffdsfsfsfdfdfsdfd.\nfsfsffdsfsfsfdfdfsdfdfsfs ffdsfsfsfdfdfsdfdfsfsffdsf sfsfdfdfsdf dfsfsffdsfsfsfdfdfsdfdfsfsffdsfsfsfdfdfsdfdfsfsffdsfsfsfdfdfsdfdfsfsffdsfsfsfdfdfsdfdfsfsf",
            }, {
                "id": 2,
                "title": "private3",
                "short_description": "fdsfsfsfdfd fsdfdfsfsff dsfsfsfdfdfs dfdfsfsffd sfsfsfdfd fsdfdfsfsffdsfs fsfdfdfsdfdfsfsf",
                "long_description": '<div class="video-container"><iframe width = "560" height = "315" src = "https://www.youtube.com/embed/0HTAKT-JIaA?start=63" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
            }]
        },
        methods: {
            clearInput() {
                this.email = "";
                this.password = "";
                this.new_email = "";
                this.new_password = "";
            },
            getSignup() {
                this.clearInput();
                $(".success-msg").hide();
                $(".error-msg").hide();

                $("#dashbord-box").hide();
                $("#sign-in-box").hide();
                $("#sign-up-box").show();
            },
            getSignin() {
                this.clearInput();

                $("#dashbord-box").hide();
                $("#sign-up-box").hide();
                $("#sign-in-box").show();
            },
            displayMessage(message, error = false) {
                this.clearInput();
                if (error) {
                    $(".error-msg").show();
                    $(".error-msg").html(message);
                    $(".success-msg").hide();
                } else {
                    $(".success-msg").show();
                    $(".success-msg").html(message);
                    $(".error-msg").hide();
                }
            },
            displayDashbord(data) {
                this.clearInput();

                $("#sign-in-box").hide();
                $("#sign-up-box").hide();

                $("#dashbord-box").show();
            },
            signup() {
                console.log("signing up as " + this.new_email + " " + this.new_password);
                let form_data = new FormData();
                form_data.append("email", this.new_email);
                form_data.append("password", this.new_password);

                fetch(this.signup_url, { method: "POST", body: form_data }).then(response => {
                    return response.json();
                }).then(response => {
                    if (response.error) {
                        this.displayMessage(response.message, true);
                    } else {
                        this.displayMessage(response.message);
                        this.getSignin();
                    }
                });
            },
            signin() {
                let form_data = new FormData();
                form_data.append("email", this.email);
                form_data.append("password", this.password);

                fetch(this.signin_url, { method: "POST", body: form_data }).then(response => {
                    return response.json();
                }).then(response => {
                    if (response.error) {
                        this.displayMessage(response.message, true);
                    } else {
                        this.displayMessage(response.message);
                        this.displayDashbord(response.data);
                        this.sections = response.data.sections;
                    }
                });
            },
            signout() {
                fetch(this.signout_url, { method: "GET" }).then(response => {
                    return response.json();
                }).then(response => {
                    this.displayMessage(response.message, response.error);
                    this.sections = null;
                    this.getSignin();
                });
            }
        }
    });
};