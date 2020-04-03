   Feature: DEMO POC 1

   This feature is created for a demo

   Background:
      Given the google WebSite
      
   @wip
   Scenario: Result is in first position
      When I search for "climaginaire"
      Then the search retrieves "http://www.climaginaire.com/" as results
  
   Scenario Outline: Result is in first position
      When I search for "<keyword>"
      Then the search retrieves "<result>" as results

   Examples:
      | keyword         | result                               |
      | climaginaire    | http://www.climaginaire.com/         |
      | tintin skyblog  | https://objectif-tintin.skyrock.com/ |
      | google          | https://www.google.fr/               |

   
   Scenario: The page 2 exists
      When I search for "climaginaire"
      Then the page "2" exists
  
   Scenario: There are lots of result
      When I search for "climaginaire"
      Then the following page exists
         | page |
         |   2  |
         |   3  |
         |   4  |
         |   5  |
         |   6  |
         |   7  |
         |   8  |