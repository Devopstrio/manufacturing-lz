from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_devices():
    return {'status': 'ok'}
@router.post('/register')
def register_device():
    return {'status': 'ok'}
