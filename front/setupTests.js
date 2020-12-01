import "react-native";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import MockAsyncStorage from "mock-async-storage";

const mockImpl = new MockAsyncStorage();
jest.mock("@react-native-community/async-storage", () => mockImpl);

configure({ adapter: new Adapter() });
