require './config/environment'



use Rack::MethodOverride
run ApplicationController
use UsersController
use TasksController
use ListsController