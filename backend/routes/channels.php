<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/


Broadcast::channel('contact-book.{contactBookId}', function (User $user, $contactBookId) {
    return $user->canAccessContactBook($contactBookId);
});

Broadcast::channel('user-contact-books.{id}', function (User $user, $id) {
    return (int) $user->id === (int) $id;
});
