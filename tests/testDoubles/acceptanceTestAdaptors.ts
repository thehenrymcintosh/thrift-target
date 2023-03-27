import {Adaptors} from "@infrastructure/adaptors";
import {
    ExtendedTestInMemoryOfferRepository,
    ExtendedTestOfferRepository
} from "tests/testDoubles/extendedTestOfferRepository";
import {OfferResponder} from "@application/ports/services/OfferResponder";
import {FakeOfferResponder} from "@fakes/adaptors/services/FakeOfferResponder";

interface TestAdaptors extends Adaptors {
    offerRepository: ExtendedTestOfferRepository,
    offerResponder: OfferResponder
}
export const adaptors: TestAdaptors = {
    offerRepository: new ExtendedTestInMemoryOfferRepository(),
    offerResponder: new FakeOfferResponder()
}