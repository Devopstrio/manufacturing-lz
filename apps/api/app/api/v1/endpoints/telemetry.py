from fastapi import APIRouter
router = APIRouter()
@router.post('/ingest')
def ingest_telemetry():
    return {'status': 'ok'}
