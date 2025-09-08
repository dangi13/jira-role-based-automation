# 🚀 API Performance Tests - Restful Booker

This directory contains performance tests using Apache JMeter for the [Restful Booker](https://restful-booker.herokuapp.com/apidoc/index.html) API, analyzing API behavior under different load conditions.

## 🎯 Test Strategy

Our performance testing approach includes:

1. 🔄 **Thread Groups Organization**
   - Authentication thread group for token generation
   - CRUD operations thread group for booking operations
   - Separate thread groups for different load scenarios

2. 📊 **Test Scenarios**
   - Baseline testing (10 threads)
   - Moderate load (100 threads)
   - High load (1000 threads)
   - Response time analysis
   - Throughput measurement

3. 🔗 **Data Management**
   - Dynamic token handling
   - Storing access tokens in variables
   - Managing booking IDs across requests
   - Cookie and header management

4. 📈 **Reports & Analysis**
   - View Results Tree
   - Aggregate Report Summary
   - Response Time Graphs
   - Performance metrics:
     - Median response times
     - Standard deviation
     - 90th and 99th percentiles
     - Throughput rates

## 🎥 JMeter Test Execution Demo

<video src="../../media/JMeter Flow.mov" controls>
  Your browser does not support the video tag.
</video>


## 📋 Test Flow

1. **Setup Phase**
   - Initialize environment variables
   - Generate authentication token
   - Store token in variables

2. **Execution Phase**
   - Create new bookings
   - Retrieve booking details
   - Update existing bookings
   - Delete bookings
   - Measure response times

3. **Analysis Phase**
   - Generate performance reports
   - Analyze response patterns
   - Identify bottlenecks
   - Compare with baselines

## 📈 JMeter Listeners Used

1. **View Results Tree**
   - Request/Response details
   - Headers and cookies
   - Response validation

2. **Aggregate Report**
   - Average response times
   - Error rates
   - Throughput metrics

3. **Graph Results**
   - Response time trends
   - Active threads over time
   - Performance patterns
