local copilot_allowed_attach_fts = {
	markdown = true,
	json = true,
	yaml = true,
}
---@module 'lazy'
---@type LazySpec
return {
	{
		"zbirenbaum/copilot.lua",
		---@module 'copilot'
		---@type CopilotConfig
		---@diagnostic disable-next-line: missing-fields
		opts = {
			should_attach = function(bufnr, _)
				local filetype = vim.bo[bufnr].filetype
				return copilot_allowed_attach_fts[filetype] or false
			end,
		},
		optional = true,
	},
}
