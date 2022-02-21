
import Chat from "./chat";

/**
 * Display a listing of the resource.
 */
exports.index = async (req, res) => {
    Chat({ req, res }).index();
}