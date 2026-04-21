.PHONY: dev tail-log clean

dev:
	@ENV=development ./scripts/shoreman.sh

tail-log:
	@tail -100 ./dev.log | perl -pe 's/\e\[[0-9;]*m(?:\e\[K)?//g'

clean:
	@rm -f dev.log dev-prev.log .shoreman.pid
