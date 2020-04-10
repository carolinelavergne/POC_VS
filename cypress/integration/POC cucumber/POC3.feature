@wip
Feature: DEMO POC 3

   This feature is created for a demo
   Background:
      Given the climaginaire WebSite

   Scenario: Test quick search with no result
      When I search for "KARMEN"
      Then the search retrieves "2" results