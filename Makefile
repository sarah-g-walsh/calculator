bootstrap:
	@yarn

format:
	@echo "[INFO] Formatting source code using Prettier"
	@yarn pretty

lint:
	@echo "[INFO] Linting source code using ESLint"
	@yarn lint
