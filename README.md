# General target structure for repos
This is intended to be representative of an ideal repo. In practice, repositories are not currently structured this way, but are being migrated to this structure gradually via the boy scout rule: "Leave the code better than you found it". Is is therefore essential that we all know what 'good' looks like for our projects, so that we can actually leave the code better than we found it. 

### Key Embedded concepts 
This project structure and way of working is heavily influenced by:
- Hexagonal architecture
- Outside-in TDD
- Domain driven design
- SOLID principles
- Clean code principles (Readability over conciseness, YAGNI, KISS, DRY)

Use cases are the primary level where all business rules are tested, though more tests within the domain are necessary and encouraged.
Integration tests cover infrastructure which can be run locally, like database queries. This includes fakes. 
Acceptance tests (not yet included in this project) cover api endpoints and ensure requests are wired up correctly. This means checking status codes, response formats, and basic request validation. It doesn't meaningfully test business logic.

### Task description
When customers view our items on eBay, they are able to submit an offer for the item.
We will be writing an application use case to respond to batches of these inbound offers using Outside-in TDD, though in the interest of time some code & test setup has been provided already.
See tests/usecases/respondToOffers.spec.ts for a rough outline of what we'll cover.

After that we'll discuss the broader system design and infrastructure for executing the use case in a production environment. 
This will cover concepts like observability, error handling, failure recovery, sync vs async communication, integration with 3rd party services. 
We will aim to get as far as we can with all of that within an hour.

