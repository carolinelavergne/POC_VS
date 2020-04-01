@wip
Feature: DEMO POC 2

   This feature is created for a demo
   Background:
      Given the google WebSite

   Scenario: Test quick search with no result
      When I search for "azertyuikjhgfdsdfghjk jhngfdsdbgfh"
      Then the search retrieves no result for "azertyuikjhgfdsdfghjk jhngfdsdbgfh"