.PHONY: help build up down test lint migrate simulate-device edge-sync factory-audit firmware-update

help:
	@echo "Manufacturing Landing Zone - Management Commands"
	@echo "-----------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "simulate-device : Start IIoT device simulation"
	@echo "edge-sync       : Trigger manual edge-to-cloud synchronization"
	@echo "factory-audit   : Run Zero Trust security compliance check"
	@echo "firmware-update : Simulate secure firmware rollout to factory floor"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/edge
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

simulate-device:
	docker-compose exec api python scripts/simulate-device/start_simulation.py

edge-sync:
	docker-compose exec api python scripts/edge-sync/trigger_sync.py

factory-audit:
	docker-compose exec api python scripts/security/factory_audit.py

firmware-update:
	docker-compose exec api python scripts/edge-sync/rollout_firmware.py
