FROM openjdk:8-jdk-alpine
COPY target/app.jar app.jar
CMD ["java","-jar","/app.jar"]