# backend

**!!do not touch this directory while working on front end branches!!**

**do not work on back end at all when front end repos are checked out**

####Resources for getting this working

See: 

* back end
    * https://github.com/JamieBort/LearningDirectory/tree/master/Java/Java_Specific_Concepts#creating-spring-boot-project
        * dependencies (for spring and vue) at [3:30 min.](https://www.youtube.com/watch?v=5mpHejytgFE):
            * `Spring Boot Dev Tools`
            * `Spring Web`
        * change port:
            * in `resources` directory in `application.properties` file:
                * change empty file to `server.port=8085`
        * in same directory as Main.java file create
            * `HomeController.java`
                * in it:
                    ```
                    package ...
                    @RestController
                    @CrossOrigin // address potential CORS issue(s).
                    public class HomeController{
                        @GetMapping("/")
                        public String home(){
                            return "Hello from Spring Boot";
                        }
                        
                    }
                    ```
    * https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/SpringBoot/SpringBootQuickStart#resources-for-this-course
        * actually creating a spring boot project:
            * https://www.youtube.com/watch?v=bDtZvYAT5Sc&list=PLqq-6Pq4lTTbx8p2oCgcAQGQyqN8XeA1x&index=8
                * dependencies
                    * `spring-boot-starter-web`

* front end