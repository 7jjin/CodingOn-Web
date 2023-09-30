const db = [
    {
        id: 1,
        title: "추석 연휴가 시작되었습니다",
        done: false,
    },
    {
        id: 2,
        title: "즐거운 추석연휴보내세요",
        done: false,
    },
    {
        id: 3,
        title: "과제도 꼭 해주시기 바랍니다",
        done: false,
    },
    {
        id: 4,
        title: "모두 고향 잘 다녀오세요",
        done: false,
    },
];

const get_todo = (req, res) => {
    res.json({ data: db });
};
const post_todo = (req, res) => {};
const patch_todo = (req, res) => {};
const delete_todo = (req, res) => {};

module.exports = { get_todo, post_todo, patch_todo, delete_todo };
