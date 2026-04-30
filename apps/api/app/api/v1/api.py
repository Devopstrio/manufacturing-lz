from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, devices, telemetry, analytics, edge
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(devices.router, prefix="/devices", tags=["devices"])
api_router.include_router(telemetry.router, prefix="/telemetry", tags=["telemetry"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(edge.router, prefix="/edge", tags=["edge"])
