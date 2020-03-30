Feature: DEMO POC 1

   This feature is created for a demo

   Scenario: Test quick search

      Given the climaginaire WebSite
      When I search for "Karmen"
      Then the search retrieve "1" result