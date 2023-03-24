# General target structure for repos

### Key Embedded concepts 
This project structure and way of working is heavily influenced by:
- Hexagonal architecture
- Outside-in TDD
- Domain driven design

Use cases are the primary level where all business rules are tested.
Integration tests cover infrastructure which can be run locally, like database queries. This includes fakes. 
Acceptance tests (not yet included in this project) cover api endpoints and ensure requests are wired up correctly. This means checking status codes, response formats, and basic request validation. It doesn't meaningfully test business logic.

### Task description
When customers view our items on eBay, they are able to submit an offer for the item.
We will be writing an application use case to respond to batches of these inbound offers using TDD.
See tests/usecases/respondToOffers.spec.ts for a rough outline of what we'll cover.

After that we'll discuss the broader system design and infrastructure for executing the usecase in a production environment. 

