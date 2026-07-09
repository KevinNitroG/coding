function RunLeetcode()
	local file = vim.api.nvim_buf_get_name(0)
	assert(file:match("leetcode/.+%.js$") or file:match("leetcode/.+%.ts$"), "Not a leetcode JS/TS file")
	vim.cmd("bot 20new | term node -r ./leetcode/env.cjs " .. file)
end

vim.keymap.set("n", "<localleader>r", RunLeetcode, { desc = "Run Leetcode file" })
