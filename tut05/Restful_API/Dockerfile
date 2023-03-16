#base image: linux alpie os with open jdk 19
FROM openjdk:19-alpine3.16
#copy jar from local into docker image
COPY target/Restful_API-0.0.1-SNAPSHOT.jar Restful_API-0.0.1-SNAPSHOT.jar
#command line to run the jar
ENTRYPOINT ["java","-jar","/Restful_API-0.0.1-SNAPSHOT.jar"]

